# Performance Efficiency
The Performance Efficiency pillar includes the ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve.

## **Definition**
There are 4 best practice areas for performance efficiency in the cloud:

- [Selection](best-practices/selection/index.md)
- [Review](best-practices/review.md)
- [Monitoring](best-practices/monitoring.md)
- [Tradeoffs](best-practices/tradeoffs.md)

Take a data-driven approach to building a high-performance architecture. Gather data on all aspects of the architecture, from the high-level design to the selection and configuration of resource types.

Reviewing your choices on a regular basis ensures that you are taking advantage of the continually evolving AWS Cloud. Monitoring ensures that you are aware of any deviance from expected performance. Make trade-oﬀs in your architecture to improve performance, such as using compression or caching, or relaxing consistency requirements.

## **Design principles**
There are 5 design principles for performance efficiency in the cloud:
<details>
<summary>Democratize advanced technologies</summary>
<p>
Make advanced technology implementation easier for your team by delegating complex tasks to your cloud vendor. Rather than asking your IT team to learn about hosting and running a new technology, consider consuming the technology as a service. For example, NoSQL databases, media transcoding, and machine learning are all technologies that require specialized expertise. In the cloud, these technologies become services that your team can consume, allowing your team to focus on product development rather than resource provisioning and management.
</p>
</details>
<details>
<summary>Go global in minutes</summary>
<p>
Deploying your workload in multiple AWS Regions around the world allows you to provide lower latency and a better experience for your customers at minimal cost.
</p>
</details>
<details>
<summary>Use serverless architectures</summary>
<p>
Serverless architectures remove the need for you to run and maintain physical servers for traditional compute activities. For example, serverless storage services can act as static websites (removing the need for web servers) and event services can host code. This removes the operational burden of managing physical servers, and can lower transactional costs because managed services operate at cloud scale.
</p>
</details>
<details>
<summary>Experiment more often</summary>
<p>
With virtual and automatable resources, you can quickly carry out comparative testing using different types of instances, storage, or configurations.
</p>
</details>
<details>
<summary>Consider mechanical sympathy</summary>
<p>
Understand how cloud services are consumed and always use the technology approach that aligns best with your workload goals. For example, consider data access patterns when you select database or storage approaches.
</p>
</details>