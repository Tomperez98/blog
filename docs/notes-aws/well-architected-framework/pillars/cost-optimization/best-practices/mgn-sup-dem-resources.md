The following question focuses on these considerations for cost optimization.

??? question "How do you manage demand, and supply resources?"

    For a workload that has balanced spend and performance, ensure that everything you pay for is used and avoid significantly underutilizing instances. A skewed utilization metric in either direction has an adverse impact on your organization, in either operational costs (degraded performance due to over-utilization), or wasted AWS expenditures (due to over-provisioning).

## Manage Demand

- **Throttling:** If the source of the demand has retry capability, then you can implement throttling. Throlling tells the source that if it cannot service the request at the current time it should try again later. The source will wait for a period of time and then re-try the request. Implementing throttling has the advantage of limiting the maximum amount of resources and costs of the workload.
- **Buffer based:** Similar to throttling, a buffer defers request processing, allowing appliaction that run at different rates to communicate effectively. A buffer-based approach uses a queue to accept messages (unit of work) from producers. Message are read by consumers and processed, allowing the messages to run at the rate that meets the consumers' business requirements.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/manage-demand-and-supply-resources.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>