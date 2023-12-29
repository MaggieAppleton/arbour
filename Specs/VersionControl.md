
# Version Control Spec

## Problem and Context

In writing on my garden, I’ve found updating posts tricky.

Here’s what happens: I publish a rough piece of work, post it to Twitter, and people give me a bunch of useful feedback and additional references to look at.

I now want to update my post to incorporate the new information I’ve learned. But I also would like to preserve the original. Having a versioning system on posts would allow the writer to revise their work without losing the original.

Preserving the original and having visible versioning is helpful because:
- The people who gave me feedback and references can see I incorporated their ideas and updated the post. I can share an updated version, thanking them for their ideas and crediting them. Having access to both the original and revised version makes clear that the content has changed.
- People who find the post via a comment about the original version are not confused when the comment no longer matches the content.
	For example, a comment might say “I like this, but it should mention X”. When they click through to the piece, they find a large section about X. That would be confusing.
- People can see how a long piece evolved over time. This shows the reader that you can publish something a bit shitty to the web, and slowly improve it in stages. It makes the process of growing a piece in public more transparent.

Having version control should help lower the friction to publishing. I predict it will feel easier to publish crappy V0 drafts. You now have an explicit, built-in system for revising that draft, and you don’t need to worry about readers being confused as the content evolves.

## Proposed Solution

- Give each macro post its own version history.
- Every post starts as V0 by default, and then increments to V1, V2, etc. We're not doing semantic versioning or minor versions like V1.4.1.
- Each post should visually show the current version number, the total version count, and allow readers to easily navigate between versions.
- When viewing an older version, there should be a clearly visible banner or section directing readers to the latest version.
- Each version should show the date it was published.

To be clear, writers can and should still fix and update small parts of their posts without making new versions. Versions are an optional tool they can use when they plan to make substantial edits. Writers could ignore the versioning system altogether and publish V0's of everything that they edit directly.

**Versions and RSS**
- New versions should be published to the RSS feed by default.
  - Maybe writers should be able to toggle this on/off in global settings. E.g. `publishNewVersionsToRSS = true/false`
- Writers should have the option to _not_ publish a version to their RSS feed. There are two use cases for this:
  1. When you publish a first version, it might be so rough you don't want many people to see it. It's not worth pushing to RSS until you have a new version out.
  2. When you update a few small things on a post, but not enough that it's worth notifying people.
  - Implementation could be in the markdown front matter. E.g. `publishToRSS: false`

Giving writers more control over what gets pushed to their RSS helps reduce the friction to publishing and respects the attention of their readers.

**Versions and URLs**

- Each version will need its own URL.
- We also want to have one, simple, canonical URL for each post. Something like `garden.com/best-nuts-for-squirrels` 

- When a reader goes to that canonical URL, it should redirect them to the latest version of the post.
  - For example, if I have three versions of a post, and you go to `garden.com/best-nuts-for-squirrels`, it should redirect you to `garden.com/best-nuts-for-squirrels/v3`.
  - You can still navigate to `garden.com/best-nuts-for-squirrels/v2` and v1.  

- When you copy or share the URL around the web, it should *ideally* be the canonical URL, but that's hard to enforce.
  - We'll use that link on share buttons.
  - If readers copy the true URL from the address bar they'll be linking to a specific version, but that's fine.


## User Journeys

### Writer

- I make a new markdown file in my `/posts` folder (or whatever it's called) and name it what I want the slug to be. E.g. `best-nuts-for-squirrels.md`
    - This is v1 by default, but I don't have to declare that anywhere.
- If I want to make a V2 of this post, I make a folder called `best-nuts-for-squirrels` and put the old markdown file in there. I rename the first version to `v1.md` and the new version to `v2.md`.

With this system, users can have a list of both markdown files and folder in a single `/posts` directory. This will make it easy to visually scan. 

### Reader




## Open Questions

