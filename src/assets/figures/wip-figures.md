## meta

### Numbering
Numbers are a best-guess at the final order the diagrams will appear in the final document.  These numbers are not perfect, but they are a lot better than just starting from 0 and adding 1 with no best-guess, as diagrams would appear *very* out of order in that scenario, when sorted by filename.  

Why not just drop the numbers and use filenames only?  
1. For the same reason that SKU's were invented.  It's helpful to have a short, unambiguous serial number for every graphic
2. It's helpful to be able to view related files next to each other in the file explorer, when sorted alphabetically

### Aspect Ratio
Diagrams are drawn with a phone screen in mind.  Ideally they'll be small enough to be viewable on a phone screen, although some diagrams will require some pinch and zooming.

### Viewability
Keep in mind that wiewing images on Google Docs is more difficult than on a well-designed webpage.

Pinch and zoom on a website is pretty easy on all phones (I think?), but for larger diagrams, We can also potentially give desktop users more viewing options with a javascript lightbox: e.g. click the image to open the lightbox, scroll to zoom, drag to pan around, escape or click-away to return to exit the lightbox

### Production Process
About the diagrams and diagramming process
![](000-meta/001-process.excalidraw.svg)

### Formatting / presentation ideas
Some ideas for presenting multiple images
![050-alternatives-presentation.excalidraw|455](000-meta/050-alternatives-presentation.excalidraw.svg)
## overview

### User experience
![](100-intro/120-before-and-after.excalidraw.svg)

### How it works
A vendor agnostic overview of Oiva
![](100-intro/101-overall-design.excalidraw.svg)

Our current implementation
![102-overall-design-w-vendors.excalidraw](100-intro/102-overall-design-w-vendors.excalidraw.svg)

## The problem
![310-before](300-problem/310-before-and-after/310-before.png)

![301-overwhelm](300-problem/301-overwhelm/301-overwhelm.png)

![305-astro-shop-architecture-mermaid](300-problem/320-astro-shop-architecture-mermaid.png)

![310-modern-observability-dashboard](300-problem/325-modern-observability-dashboard.png)

![311-after](300-problem/310-before-and-after/311-after.png)

## Agent Architecture

A minimal agentic workflow
![751-min-agent.excalidraw](700-agent/751-min-agent.excalidraw.svg)

Splitting workload into more specific agents
![752-med-agent.excalidraw](700-agent/752-med-agent.excalidraw.svg)

Adding supervisor and subagents
![753-super-agent.excalidraw](700-agent/753-super-agent.excalidraw.svg)

Adding more determinism to increase likelihood of certain outcomes
![780-another-workflow.excalidraw|359](700-agent/780-another-workflow.excalidraw.svg)

### enrichAlert tool
Before the enrichAlert tool
![770-before-enrich-alert-tool.excalidraw](700-agent/770-before-enrich-alert-tool.excalidraw.svg)

After:
![771-after-enrich-alert-tool.excalidraw](700-agent/771-after-enrich-alert-tool.excalidraw.svg)

### tool Wrapper



![](700-agent/760-improving-telagent-performance.excalidraw.svg)


![](700-agent/765-tool-wrapper.jpg)













## System Archtecture

### Simplified Architecture
TBD - based on what is needed by the Case Study text.  These diagrams will be somewhere between these two extremes:
- [101-overall-design.excalidraw](100-intro/101-overall-design.excalidraw.svg)
- [690-final-infra.excalidraw](600-infra/690-final-infra.excalidraw.svg)

### Full Architecture
Here's the full diagram, with all the gory details.  Simplified diagrams will be created as necessary for clear communication.

Idea: animate from least complex to most complex?
![Full diagram](600-infra/690-final-infra.excalidraw.svg)


