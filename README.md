# GOON CODE

LET ME EXPLAIN THE JOKE FOR YOU.

This is my silly website attempting to make fun of the concept of "vibe coding".
It relates the concept of "vibe coding" with the concept of
"[gooning](https://knowyourmeme.com/sensitive/memes/gooning-goon-cave)", both of which involve surrendering
control over your conscience mind to external forces.
I think the proponents of these LLM-powered code generators overstate the ability these devices to
generate maintainable code. More importantly, they overstate the ability of the people to maintain
their vibe coded projects. I think in time there will be platforms that make "vibe coded" applications
viable, just as Excel macros have empowered many business processes. But I don't expect every business
to have their own bespoke CRM in place of SalesForce, just because dealing with the bugs and security
patching would become an externality that the business would like to offload to someone else.

Or to say it more succinctly, the proponents of "vibe coding" imagine a world where a greater volume
of software creates more value. This flies in the face of 70 years of software engineering where the
more code you have the more problems you have. Multiplying technical debt across hundreds of companies
using LLMs is not going to be this problem better.

## Are you not a hypocrite for using an LLM to create this site in spite of your complete lack of frontend skills?

![What are you looking at? You've never see a hypocrite before?](hypocrite-big-bang-theory.gif)

Fair, fair. I suck at front end. But I have enough taste to know that this site sucks.
The process of creating this confirmed that Tailwind causes more problems than it solves in frontend.
And I trimmed all extern dependencies so at least this SPA pile of garbage loads from a single origin.
I'm fairly confident that I will never have to touch this site again after shipping it.
It's just a dumb joke. To apply the same level of care to something that would actually affect real
people's lives would be totally lame.

## Contributing

If you want to upload a picture of your vide cave, perform the following steps:

1. Clone this repo.
2. Add a picture of your vibe cave under `public/caves/`. Try to make it not too big on a file size basis,
   like maybe under 1MiB?
3. Update the data structure at the top of `components/Testimonials.tsx` to include your picture.
4. Open a pull request.

In spite of this website's allusions to the NSFW concept of "gooning", please keep your picture,
name, and link safe for work. Unless it is reallllllllly funny. Approvals of submissions are at my
sole discretion.

Currently this repo is [licensed](./LICENSE) under the GNU Affero General Public License.
If you can think of a good reason for this to be licensed under something less restrictive, feel
free to open an issue.

## Running locally

Have Node.js installed in one way or another on your machine. Then:

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
