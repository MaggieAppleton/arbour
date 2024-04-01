# Prototype Plans

We have enough specs for the major features to start prototyping.

- [Version Control](./VersionControl.md)
- [Backlinks and Forward Links](./Backlinks.md)
- [Macro and Micro Posts](./MicroMacro.md)

We've decided to use Astro for the main framework. Astro takes care of a _lot_ of things for us. We should spin up a simple Astro site and try to get version control and backlinks working.

## Requirements

- Have 3 dummy data posts
- Each post lives at their own canonical URL
- Each post should have 3 versions, each with their own URL (`/banana/v1`, `/banana/v2`)
- The canonical URL should redirect people to the latest version
- Each post should link to the 2 others, and have a list of backlinks of posts that link to it
- Make a set of micro and macro posts
  - Twoots
  - Notes
  - Essays
