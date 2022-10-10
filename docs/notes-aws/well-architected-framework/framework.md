---
hide:
  - toc
---

## **Overview**
> The AWS Well-Architected Framework describes key concepts, design principles, and architectural best-practices for designing and running workloads in the cloud.

### **Introduction**
Using the Framework helps you learn architectural best practices for designing and operating secure, reliable, efficient, cost-effective, and sustainable workloads in the AWS Cloud. It provides a way for you to consistently measure your architectures against best practices and identify areas for improvements. ***The process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism***.

The AWS Well-Architected Framework ***documents a set of foundational questions that allow you to understand if a specific architecture aligns well with cloud best practices.*** The framework provides a ***consistent approach to evaluating systems against the qualities you expect from modern cloud-based systems***, and the remediation that would be required to achieve those qualities. ***The AWS Well-Architected framework is continuously refined as AWS learns more from working with customers.***


### **Definitions**
The AWS Well-Architected Framework is based on six pillars - Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.

|                                   Name                                   |                                                                   Description                                                                    |
| :----------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| **[Operational Excellence](pillars/operation-excellence/definition.md)** | To support development and run workloads effectively, and to continuosly improve supporting processes and procedures to delivery business value. |
|              **[Security](pillars/security/definition.md)**              |                                How to take advantage of cloud technologies to protect data, systems, and assets.                                 |
|           **[Reliability](pillars/reliability/definition.md)**           |                     Ability for a workload to perform consistently as expected. Expected both in functionality and on time.                      |
|   **[Performance Efficiency](pillars/perf-efficiency/definition.md)**    |  To use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.  |
|     **[Cost Optimization](pillars/cost-optimization/definition.md)**     |                                               To deliver business value at the lowest price point.                                               |
|        **[Sustainability](pillars/sustainability/definition.md)**        |   To continually improve sustainability impacts by reducing energy consumption and increasing efficiency across all components of a workload.    |

In the AWS Well-Architected Framework, we use these terms:

- A **Component** is the code, configuration, and AWS Resources that together deliver against a requirement. A component is often the unit of technical ownership, and is decoupled from other components.
- The term **workload** if used to identify a set of components that together deliver business value. A workload is usually the level of detail that business and technology leaders communicate about.
- We think about **architecture** as being how components work together in a workload. How components communicate and interact is often the focus of architecture diagrams.
- **Milestones** mark key changes in your architecture as it evolves throughout the product lifecycle (design, implementation, testing, go live, and in production).
- Within an organization the **technology portfolio** is the collection of workloads that are required for the busness to operate.

### **General Design Principles**

??? tip "Stop guessing your capacity needs"

    With cloud you don't need to guess your capacity needs up-front. If you need more scale-up, if you need less scale-down. Start small and cheap.

??? tip "Test systems at production scale"

    With cloud you can create a copy of your production environment to test your applications at the same scale for a fraction of the cost (Spin up your test infrastructure -> Test your application -> Destroy your test infrastructure)

??? tip "Automate to make architectural experimentation easier"

    Automate everything. As much as you can. Automation is an investment and that's paid off lowering manual effort, enabling version tracking and an easy version revert.

??? tip "Allow for evolutionary architectures"

    With cloud it's easier and possible to refactor your complete architecture. Lower switching cost enable your business to adapt and evolve as changes and requirements appear.

??? tip "Drive architecture using data"

    Cloud reports data about your architecture, collect it. Make incremental improvement and iterate as new data comes in. This is a repetitive process.

??? tip "Improve through game days"

    Cloud allow you to play and stress test your architecture. Schedule regular play games, to simulate processes, edge cases, and new implementations.
