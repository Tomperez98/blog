# Cost Optimization
The Cost Optimization pillar includes the ability to run systems to deliver business value at the lowest price point.

## **Definition**
There are 5 best practice areas for cost optimization in the cloud:

- [Practice Cloud Financial Management](best_practices/cloud_financial_mgmt.md)
- [Expenditure and usage awareness](best_practices/exp_and_usg_awareness.md)
- [Cost-effective resources](best_practices/cost_effective_resources.md)
- [Manage demand and supply resources](best_practices/mgn_sup_dem_resources.md)
- [Optimize over time](best_practices/optimize_over_time.md)

As with the other pillars within the Well-Architected Framework, there are tradeoﬀs to consider, for example, whether to optimize for speed-to-market or for cost. In some cases, it’s best to optimize for speed—going to market quickly, shipping new features, or simply meeting a deadline—rather than investing in up-front cost optimization. Design decisions are sometimes directed by haste rather than data, and the temptation always exists to overcompensate “just in case” rather than spend time benchmarking for the most cost-optimal deployment. This might lead to over-provisioned and under-optimized deployments. However, this is a reasonable choice when you need to “lift and shift” resources from your on-premises environment to the cloud and then optimize afterwards. Investing the right amount of effort in a cost optimization strategy up front allows you to realize the economic benefits of the cloud more readily by ensuring a consistent adherence to best practices and avoiding unnecessary over provisioning. The following sections provide techniques and best practices for both the initial and ongoing implementation of Cloud Financial Management and cost optimization of your workloads.

## **Design principles**
There are 5 design principles for cost optimization in the cloud:
<details>
<summary>Implement Cloud Financial Management</summary>
<p>
To achieve financial success and accelerate business value realization in the cloud, you need to invest in Cloud Financial Management /Cost Optimization. Your organization needs to dedicate time and resources to build capability in this new domain of technology and usage management. Similar to your Security or Operational Excellence capability, you need to build capability through knowledge building, programs, resources, and processes to become a cost-efficient organization.
</p>
</details>
<details>
<summary>Adopt a consumption model</summary>
<p>
Pay only for the computing resources that you require and increase or decrease usage depending on business requirements, not by using elaborate forecasting. For example, development and test environments are typically only used for eight hours a day during the work week. You can stop these resources when they are not in use for a potential cost savings of 75% (40 hours versus 168 hours).
</p>
</details>
<details>
<summary>Measure overall efficiency</summary>
<p>
Measure the business output of the workload and the costs associated with delivering it. Use this measure to know the gains you make from increasing output and reducing costs.
</p>
</details>
<details>
<summary>Stop spending money on undifferentiated heavy lifting</summary>
<p>
AWS does the heavy lifting of data center operations like racking, stacking, and powering servers. It also removes the operational burden of managing operating systems and applications with managed services. This allows you to focus on your customers and business projects rather than on IT infrastructure.
</p>
</details>
<details>
<summary>Analyze and attribute expenditure</summary>
<p>
The cloud makes it easier to accurately identify the usage and cost of systems, which then allows transparent attribution of IT costs to individual workload owners. This helps measure return on investment (ROI) and gives workload owners an opportunity to optimize their resources and reduce costs.
</p>
</details>