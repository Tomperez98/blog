The following question focuses on these considerations for sustainability.

??? question "How do you take advantage of user behavior patterns to support your sustainability goals?"

    The way users consume your workloads and other resources can help you identify improvements to meet sustainability goals. Scale infrastructure to continually match user load and ensure that only the minimum resources required to support users are deployed. Align service levels to customer needs. Position resources to limit the network required for users to consume them. Remove existing, unused assets. Identify created assets that are unused and stop generating them. Provide your team members with devices that support their needs with minimized sustainability impact.
    
## Scale infrastructure with user load
Identify periods of low or no utilization and scale resources to eliminate excess capacity and improve efficiency.

## Align SLAs with sustainability goals
Define and update service level agreements (SLAs) such as availability or data retention periods to minimize the number of resources required to support your workload while continuing to meet business requirements.

## Eliminate creation and maintenance of unused assets
Analyze application assets (such as pre-compiled reports, data sets, and static images) and asset access patterns to identify redundancy, underutilization, and potential decommission targets. Consolidate generated assets with redundant content (for example, monthly reports with overlapping or common data sets and outputs) to eliminate the resources consumed when duplicating outputs. Decommission unused assets (for example, images of products that are no longer sold) to free consumed resources and reduce the number of resources used to support the workload.

## Optimize geographic placement of workloads for user locations
Analyze network access patterns to identify where your customers are connecting from geographically. Select Regions and services that reduce the distance that network traffic must travel to decrease the total network resources required to support your workload.

## Optimize team member resources for activities performed
Optimize resources provided to team members to minimize the sustainability impact while supporting their needs. For example, perform complex operations, such as rendering and compilation, on highly utilized shared cloud desktops instead of on under-utilized high-powered single user systems.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/user-behavior-patterns.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>