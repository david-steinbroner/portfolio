---
title: "3D Printing Engineering & Design"
status: "In Progress"
tags: ["CAD", "OpenSCAD", "Engineering", "Prototyping", "Problem Solving"]
date: "2025-11"
link: ""
github: ""
image: "/images/3d-printing.png"
category: "project"
description: "95+ custom 3D-printed designs solving real-world problems through parametric CAD modeling and iterative engineering."
impact:
  - "95+ custom designs across 5 categories"
  - "Parametric CAD modeling with OpenSCAD"
  - "7+ iterations on complex engineering problems"
  - "Practical solutions for home, pets, and creative projects"
---

## Overview

A comprehensive 3D printing portfolio showcasing engineering problem-solving through code-based parametric CAD modeling. Projects range from practical household repairs to creative designs and pet accessories, demonstrating iterative design thinking and technical CAD skills.

## Project Categories

### 1. Home Repairs (4 items)
**Featured Project: GE Range Hood Repair**
- 7+ design iterations (`GE_JVX5300_style_cage_SLANTED_RIBS.scad`)
- Custom replacement parts for discontinued appliance components
- Reverse-engineered original parts to create improved versions
- Demonstrates: Measurement, mechanical engineering, iterative refinement

### 2. Pet Accessories (10 items)
**Notable Designs**:
- **Cat Fence Roller System**: Prevents cats from climbing fences
- **Crow Support**: Custom wildlife feeding solution
- **Impossible Cat Toy**: Interactive puzzle toy
- Demonstrates: Animal behavior consideration, safety design, durability

### 3. Creative Projects (61 items)
**Highlights**:
- **"The Heist" Puzzle Box Series**: Multi-part mechanical puzzles
- **Hurricane & Classic Lanterns**: Decorative lighting
- **Bottles and Containers**: Custom storage solutions
- **Counters and Game Accessories**: Tabletop gaming components
- Demonstrates: Aesthetic design, mechanical complexity, functional art

### 4. Organization (11 items)
**Solutions**:
- Custom hooks and hangers for specific needs
- Wall-mounted storage systems
- Organizational aids tailored to specific spaces
- Demonstrates: Space optimization, user-centered design

### 5. Electronics (9 items)
**Projects**:
- Remote control wall mounts
- Cable management solutions
- Device holders and stands
- Demonstrates: Ergonomics, accessibility, daily-use product design

## Technical Approach

### Parametric CAD with OpenSCAD

**Why OpenSCAD?**
- Code-based modeling enables version control
- Parametric design allows easy dimension adjustments
- Reproducible and shareable designs
- Programmatic approach suits engineering mindset

**Example: Parametric Design**
```openscad
// Variables make designs adjustable
hood_diameter = 75;
rib_count = 12;
slant_angle = 15;

// Procedural modeling
for (i = [0:rib_count-1]) {
    rotate([0, 0, i * (360/rib_count)])
        slanted_rib(slant_angle);
}
```

### Iterative Design Process

**Evidence of Iteration**:
- Version numbers in filenames (v1, v2, v3)
- "FIXED" designations showing problem-solving
- 7+ iterations on GE hood collar demonstrates persistence
- Progressive complexity (`_SLANTED_RIBS` → more advanced designs)

**Design Cycle**:
1. **Problem Identification**: Broken appliance, missing organizer, etc.
2. **Initial Design**: First CAD model
3. **Print & Test**: Physical prototype
4. **Iterate**: Refine based on fit, function, durability
5. **Final Design**: Production-ready model

## Technology Stack

### Design Software
- **OpenSCAD**: Primary parametric CAD tool
- **Bambu Studio**: Slicing and print preparation (.bambu.3mf files)

### File Formats
- **.scad**: OpenSCAD source files (parametric, editable)
- **.stl**: Standard 3D printing mesh format
- **.3mf**: Advanced 3D manufacturing format (supports color, textures)

### Sources
- **Custom Designs**: Original OpenSCAD models
- **Community Designs**: Thingiverse downloads (customized and adapted)
- **Hybrid**: Mix of downloaded bases with custom modifications

## Engineering Highlights

### Problem: GE Range Hood Repair
**Challenge**: Discontinued appliance part, no replacements available

**Solution**:
- Measured original broken part
- Reverse-engineered in OpenSCAD
- Iterated on design to improve structural integrity
- Added slanted ribs for better airflow and strength
- 7+ versions before achieving perfect fit

**Skills**: Mechanical engineering, reverse engineering, material science (heat resistance)

### Problem: Cat Fence Roller System
**Challenge**: Prevent cats from climbing over backyard fence

**Solution**:
- Designed rotating roller that spins when cat attempts to climb
- Multiple mounting bracket options for different fence types
- Weather-resistant material selection
- Humane deterrent (doesn't hurt the cat)

**Skills**: Animal behavior, mechanical linkages, outdoor durability

### Problem: Custom Organization Solutions
**Challenge**: Commercial organizers don't fit specific spaces or needs

**Solution**:
- Measured exact dimensions of spaces
- Created custom-fit organization systems
- Optimized for specific items being stored
- Aesthetically matched existing décor

**Skills**: Spatial reasoning, user-centered design, material efficiency

## What This Portfolio Demonstrates

### 1. Engineering Mindset
- **Problem Decomposition**: Breaking complex problems into solvable parts
- **Iterative Refinement**: Not settling for "good enough," iterating to excellence
- **Root Cause Analysis**: Fixing problems at their source (e.g., redesigning parts with structural improvements)

### 2. Technical Capabilities
- **CAD Modeling**: Professional-level parametric design
- **Code-Based Design**: Using programming for physical objects
- **3D Printing**: Understanding of additive manufacturing constraints and capabilities
- **Material Science**: Choosing appropriate materials for each application

### 3. Product Thinking
- **User-Centered**: Designs solve real user problems (personal needs)
- **Iteration**: Multiple versions show commitment to quality
- **Documentation**: Organized file structure and naming conventions
- **Reusability**: Parametric designs can be adapted for different sizes/applications

### 4. Versatility
- **Range**: From mechanical repairs to decorative art
- **Complexity**: Simple hooks to multi-part puzzle boxes
- **Domains**: Home improvement, pets, gaming, electronics, creative

## Project Management

### Organization System
```
3D-Printing/
├── Pet-Accessories/     (10 items)
├── Creative/            (61 items)
├── Home-Repairs/        (4 items)
├── Organization/        (11 items)
├── Electronics/         (9 items)
└── Screenshots/         (Documentation)
```

### Version Control Pattern
- Iterative filenames (`v1`, `v2`, `FIXED`)
- Descriptive names (`GE_JVX5300_style_cage_SLANTED_RIBS.scad`)
- Category-based organization
- Both source (.scad) and printable (.stl) files maintained

## Real-World Applications

### Cost Savings
- Avoided expensive appliance replacement (GE hood repair)
- Created custom parts cheaper than commercial alternatives
- Reusable designs for multiple iterations/uses

### Personalization
- Custom-fit solutions for specific spaces
- Tailored to exact needs (not generic commercial products)
- Aesthetically matched to preferences

### Rapid Prototyping
- Quick iteration cycles (design → print → test → refine)
- Physical prototypes within hours (not days/weeks)
- Low-cost experimentation

## What I Learned

### CAD & Engineering
- **Parametric Design**: Creating adjustable, reusable models
- **Mechanical Engineering**: Stress analysis, structural integrity
- **Manufacturing Constraints**: Designing for 3D printing (overhangs, supports, layer adhesion)
- **Tolerance Management**: Ensuring parts fit together properly

### Problem Solving
- **Iterative Refinement**: Embracing multiple versions to reach optimal solution
- **Root Cause Analysis**: Understanding *why* things break to design better replacements
- **Creative Constraints**: Working within 3D printer build volume and material limitations

### Product Development
- **User Testing**: Personal use provided immediate feedback
- **Documentation**: Organized file naming and categorization
- **Reusability**: Designing for future adaptation and modification

## Skills Demonstrated

- Parametric CAD Modeling (OpenSCAD)
- 3D Printing & Additive Manufacturing
- Mechanical Engineering
- Iterative Design Process
- Problem Solving & Root Cause Analysis
- Material Science & Selection
- Reverse Engineering
- Spatial Reasoning
- Product Design
- Documentation & Organization
- Rapid Prototyping
- Code-Based Design
- Version Control
- User-Centered Design
- Manufacturing Constraints
