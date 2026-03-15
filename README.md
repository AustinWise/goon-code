# GOON CODE

LET ME EXPLAIN THE JOKE FOR YOU.

This is my silly website attempting to make fun of the concept of "vibe coding".
It relates the concept of "vibe coding" with the concept if "gooning", both of which involve surrendering
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

Fair, fair. But after generating the initial site, I trimmed the dependencies so everything is statically
generated (no downloading assets from other origins). And this website is just HTML and JavaScript from
a single origin with no API, so the vulnerability surface is low.

This site is a pile pf unmaintainable Tailwind garbage. So that's kind of the point.

## Running locally

Have Node.js installed in one way or another on your machine. Then:

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
