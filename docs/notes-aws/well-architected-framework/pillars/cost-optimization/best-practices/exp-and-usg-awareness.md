The following question focuses on these considerations for cost optimization.

??? question "How do you govern usage?"

    Establish policies and mechanisms to ensure that appropriate costs are incurred while objectives are achieved. By employing a checks-and-balances approach, you can innovate without overspending.

??? question "How do you monitor usage and cost?"

    Establish policies and procedures to monitor and appropriately allocate your costs. This allows you to measure and improve the cost efficiency of this workload.

??? question "How do you decommission resources?"

    Implement change control and resource management from project inception to end-of-life. This ensures you shut down or terminate unused resources to reduce waste.

## Governance
In order to manage your costs in the cloud, you must manage your usage through the governance areas below:

- **Develop Organizational Policies:** The first step in performing governance is to use your organization’s requirements to develop policies for your cloud usage. These policies define how your organization uses the cloud and how resources are managed. Policies should cover all aspects of resources and workloads that relate to cost or usage, including creation, modification, and decommission over the resource’s lifetime.
- **Develop goals and targets:** Develop cost and usage goals and targets for your organization. Goals provide guidance and direction to your organization on expected outcomes. Targets provide specific measurable outcomes to be achieved.
- **Account Structure:** AWS has a one-parent-to-many-children account structure that is commonly known as a management account (the parent, formerly payer) account-member (the child, formerly linked) account. A best practice is to always have at least one management account with one member account, regardless of your organization size or usage. All workload resources should reside only within member accounts.
- **Control - Notifications:** A common first step in implementing cost controls is to setup notifications when cost or usage events occur outside of the policies. This enables you to act quickly and verify if corrective action is required, without restricting or negatively impacting workloads or new activities.
- **Control - Enforcement:** As a second step, you can enforce governance policies in AWS through AWS Identity and Access Management (IAM), and AWS Organizations Service Control Policies (SCP). IAM allows you to securely manage access to AWS services and resources. Using IAM, you can control who can create and manage AWS resources, the type of resources that can be created, and where they can be created. This minimizes the creation of resources that are not required.

## Monitor Cost and Usage
Enable teams to take action on their cost and usage through detailed visibility into the workload. Cost optimization begins with a granular understanding of the breakdown in cost and usage, the ability to model and forecast future spend, usage, and features, and the implementation of sufficient mechanisms to align cost and usage to your organization’s objectives. The following are required areas for monitoring your cost and usage:

- **Configure detailed data sources:** Enable hourly granularity in Cost Explorer and create a Cost and Usage Report (CUR). These data sources provide the most accurate view of cost and usage across your entire organization. The CUR provides daily or hourly usage granularity, rates, costs, and usage attributes for all chargeable AWS services. All possible dimensions are in the CUR including: tagging, location, resource attributes, and account IDs.
- **Identify cost attribution categories:** Work with your finance team and other relevant stakeholders to understand the requirements of how costs must be allocated within your organization. Workload costs must be allocated throughout the entire lifecycle, including development, testing, production, and decommissioning.
- **Establish workload metrics:** Understand how your workload’s output is measured against business success. Each workload typically has a small set of major outputs that indicate performance. If you have a complex workload with many components, then you can prioritize the list, or define and track metrics for each component
- **Allocate costs based on workload metrics:** Cost Optimization is delivering business outcomes at the lowest price point, which can only be achieved by allocating workload costs by workload metrics (measured by workload efficiency). Monitor the defined workload metrics through log files or other application monitoring. Combine this data with the workload costs, which can be obtained by looking at costs with a specific tag value or account ID. It is recommended to perform this analysis at the hourly level. Your efficiency will typically change if you have some static cost components (for example, a backend database running 24/7) with a varying request rate (for example, usage peaks at 9am – 5pm, with few requests at night). Understanding the relationship between the static and variable costs will help you to focus your optimization activities.

## Decommision Resources
After you manage a list of projects, employees, and technology resources over time you will be able to identify which resources are no longer being used, and which projects that no longer have an owner.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/expenditure-and-usage-awareness.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>