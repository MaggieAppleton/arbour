# Micro and Macro Content Spec

## Problem and Context

People tend to create two sizes of content on the web: micro content like Tweets, and macro content like blog posts and essays.

**Micro posts**

Micro posts are very small pieces of content – they tend to be only a few sentences long. They don't have titles, descriptions, or tags. They're quick and easy to write, and sometimes act as the seeds of larger ideas. Their brevity is a feature, not a bug. You have to state your point clearly and concisely.

Tweets, questions, beliefs, jokes, haikus, zettles, and quotes are all examples of micro content.

People tend to publish micro posts on large, proprietary platforms like Twitter/X, Mastodon, Threads, and Tumblr. Likely because micro posts are well suited to social interactions. They're invitations for conversation and banter. So you need to publish them somewhere other people can respond to them.

While the social benefits of publishing to centralised social media make sense, the trade-off is we don't have control and ownership over the words we're writing. Elon is likely to burn down the Twitter/X servers at some point, and all our clever thoughts, poems, insights, and clap backs will go with it. Having them on a separate proprietary platform also means you can't connect your micro posts to the rest of your ideas.

With IndieWeb technologies like [Web Mentions](https://webmention.io/) and [brid.gy](https://brid.gy/) we can have our social interaction cake and own it too. Writers can publish micro posts to their own site, cross-post it to Mastodon, Bluesky, Instagram, and Threads, and display interactions / replies on their own site. More implementation detail on this below.

**Macro posts**

Macro posts are what we traditionally find on blogs and gardens. They're medium to long-form content that has a title and a body. They may also have a description, tags, and multiple versions.

**The problem**

Almost no blogging frameworks or platform supports both micro and macro content.

These two sizes need to be treated differently. You read, browse, and navigate through micro and macro content in different ways.

Micro content is best browsed as a stacked list so you can scroll down to read one after another. Much like Twitter, Mastodon, and Threads. It doesn't necessarily need its own separate page (although for the sake of linking it should have one).

Macro content needs a preview to show on an index page so you can scan over the titles and pick one to navigate to. You then enter a focused reading page with the full content on it.

I think many other blog and garden designs fail by muddling these two up. They either optimise for micro content, making macro hard to read. Or optimise for macro content, making micro content hard to read.

For example, many themes show macro content that's _way_ too long as a stacked list. So you have to scroll for miles to get to the next post, and can't quickly scan over a set of titles or navigate between them.

Other themes make every piece of content its own standalone page you have to click through to. When you arrive, the content is only a few sentences long and looks silly floating in a sea of empty space.

## Proposed Solution

Explicitly distinguish micro and macro content in Arbour.

When you create a new type of content, you decide whether its micro or macro.

If it's micro it won't need a title or any other metadata. The full content will display on index and browsing pages. It can be embedded in macro content. It can also be displayed as part of a collection on a macro page. It may need to be cross-posted to other platforms like Bluesky, Mastodon, etc. depending on the type. You may also want to push it to an RSS feed. Either your main one or a separate one just for micro updates.

If its macro it'll need at least a title and body, and optionally other properties depending on the type. E.g. cover image, author, description, growth stage, versions, aliases. The title and a preview of the content will display on index and browsing pages. When you reference it in other macro or micro posts, we show the title and a preview in a pop-over window on hover. You probably want to push it to your RSS feed.

### Implementation Ideas

I'm imagining there's somewhere in Arbour where writers define their content types. Each type has its own set of properties, including whether its macro or micro. Maybe this is just done through templates?

We can provide a base set of content types, but writers should also be able to edit and customise these.

I think some people will want unique types. For example, my types are essay, note, book, design pattern, now update, podcast, and conference talk. Someone who doesn't care about design patterns or do conference talks wouldn't need these types.

A developer might have types like code snippet, prototype, and project. 

Some sensible default types to start with:

**Macro**
- Essay – long-form written content
- Note – rough ideas

**Micro**
- Twoot – equivalent of a tweet, but a funnier word (mashup of tweet, toot, and thread)
   - Other candidates: sprout, shoot, bud 
- Question
- Book

## Micro Content URLs and Data Structure

- URLs could be `bob.com/twoot00001` or `bob.com/t00001` or `bob.com/twoots/00001` where the first twoot is 00001 and can go up to 99999. This makes the Twoot linkable, but most of the time readers will see micro content within the context of another page as a list.
- Could have different letter pre-fixes based on the type like `bob.com/q00124` for questions or `bob.com/b00012` for books.
- Micro content doesn't need to have versioning
- Content is just the thing itself, plus some metadata like date published and related tags/topics
