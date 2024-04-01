# Backlinks and Forward Links Spec

We're both pretty familiar with bi-directional links by this point, but this gist is that when you link to another post on the site, that post should display that you've linked to it. So every post is linked in two directions.

Post A linking to Post B is a _forwardlink_. Post B now has a _backlink_ to Post A.

So if I have a post on `/plants` and I say `"read my recommendations for the best <a href="/flowers">flowers</a> to plant"`, that's a _forwardlink_. Forward links are always visible in the text itself.
The page on `/flowers` now has a _backlink_ to `/plants`, but it's not visible unless we explicitly show it somewhere.

In existing digital garden designs, most people make backlinks visible at the bottom of a post, or in a sidebar.

The distinction between forwardlinks and backlinks is slightly arbitrary. Both are a way to say Post A **is related to** Post B.

I think we should group them together into a section that's something like "Related to this" or "Linked posts".
But each link should still know whether it's a forward or backlink, so that we can indicate it in the design.

For example, we could have a single list that mixes forward and backlinks together, but uses something like small labels and icons to indicate whether it's a forward or backlink. Or use some visual map to indicate forward and backlinks.

## Requirements

- Posts have a list of forwardlinks and backlinks in their metadata
- These links are rendered somewhere on the page that readers can see
- Readers can easily explore forward and backlinks to find related content
