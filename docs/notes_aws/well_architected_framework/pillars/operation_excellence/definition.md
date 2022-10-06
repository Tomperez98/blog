The Operational Excellence pillar includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value.

## **Definition**
There are four best practice areas for operational excellence in the cloud:

- [Organization](best_practices/organization.md)
- [Prepare](best_practices/prepare.md)
- [Operate](best_practices/operate.md)
- [Evolve](best_practices/evolve.md)

Your organization's leadership defines business objectives. Your organization must understand requirements and priorities and use these to organize and conduct work to support the achievement of business outcomes. Your workloads must emit the information necessary to support it. ***Implementing services to enable integration, deployment, and delivery of your workload will enable an increased flow of beneficial changes into production by automating repetitive processes.***

There may be risks inherent in the operation of your workload. You must understand those risks and make informed decision to enter production. Your teams must be able to support your workload. Business and operational metrics derived from desired business outcomes will enable you to understand the health of your workload, your operations activities, and respond to incidents. Your priorities will change as your business needs and business environment changes. Use these as a feedback loop to contiunally drive improvement for your organization and the operation of your workload.

## **Design principles**
There 5 design principles for operational excellence in the cloud:
<details>
<summary>Perform operations as code</summary>
<p>
Apply the same engineering discipline that you use for application code. You can define your entire workload (applications, infrastructure) as code and update it with code. By performing operations as code, you limit human error and enable consistent responses to events.
</p>
</details>
<details>
<summary>Make frequent, small, reversible changes</summary>
<p>
Design workloads to allow components to be updated regularly. Make changes in small increments that can be reversed if they fail (without affecting customers when possible).
</p>
</details>
<details>
<summary>Refine operations procedures frequently</summary>
<p>
As you evolve your workload, evolve your procedures appropriately. Set up regular game days to review and validate that all procedures are effective and that teams are familiar with them.
</p>
</details>
<details>
<summary>Anticipate failure</summary>
<p>
Perform "pre-mortem" exercises to identify potential sources of failure so that they can be removed and mitigated. Test your failure scenarios and validate your understanding of their impact. Set up regular game days to test workloads and team responses to simulated events.
</p>
</details>
<details>
<summary>Learn from all operational failures</summary>
<p>
Drive improvement through lessons learned from all operational events and failures. Share what is learned across teams and through the entire organization.
</p>
</details>