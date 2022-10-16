The following questions focus on these considerations for reliability.

??? question "How do you manage service quotas and constraints?"

    For cloud-based workload architectures, there are service quotas (which are also referred to as service limits). These quotas exist to prevent accidentally provisioning more resources than you need and to limit request rates on API operations so as to protect services from abuse. There are also resource constraints, for example, the rate that you can push bits down a fiber-optic cable, or the amount of storage on a physical disk.

??? question "How do you plan your network topology?"

    Workloads often exist in multiple environments. These include multiple cloud environments (both publicly accessible and private) and possibly your existing data center infrastructure. Plans must include network considerations such as intra- and inter-system connectivity, public IP address management, private IP address management, and domain name resolution.

## Manage Service Quotas and Constraints

- **Aware of service quotas and contraints:** You are aware of your default quotas and quota increase requests for your workload architecture. You additionally know which resource constraints, such as disk or network, are potentially impactful.
- **Accommodate fixed service quotas and constraints through architecture:** Be aware of unchangeable service quotas and physical resources, and architect to prevent these from impacting reliability.
- **Monitor and manage quotas:** Evaluate your potential usage and increase your quotas appropriately allowing for planned growth in usage.
- **Automate quota management:** Implement tools to alert you when thresholds are being approached. By using Service Quotas APIs, you can automate quota increase requests. 
- **Ensure that a sufficient gap exists between the current quotas and the maximum usage to accommodate failover:** When a resource fails, it may still be counted against quotas until it’s successfully terminated. Ensure that your quotas cover the overlap of all failed resources with replacements before the failed resources are terminated. You should consider an Availability Zone failure when calculating this gap.

## Plan your Network Topology

- **Use highly available network connectivity for your workload public endpoints:** These endpoints and the routing to them must be highly available.
To achieve this, use highly available DNS, content delivery networks (CDNs), API Gateway, load balancing, or reverse proxies.
Amazon Route 53, AWS Global Accelerator, Amazon CloudFront, Amazon API Gateway, and Elastic Load Balancing (ELB) all provide highly available public endpoints. You might also choose to evaluate AWS Marketplace software appliances for load balancing and proxying.
- **Provision redundant connectivity between private networks in the cloud and on-premises environments:** Use multiple AWS Direct Connect (DX) connections or VPN tunnels between separately deployed private networks. Use multiple DX locations for high availability. If using multiple AWS Regions, ensure redundancy in at least two of them. You might want to evaluate AWS Marketplace appliances that terminate VPNs. If you use AWS Marketplace appliances, deploy redundant instances for high availability in different Availability Zones.
- **Ensure IP subnet allocation accounts for expansion and availability:** Amazon VPC IP address ranges must be large enough to accommodate workload requirements, including factoring in future expansion and allocation of IP addresses to subnets across Availability Zones. This includes load balancers, EC2 instances, and container-based applications. 

<a href="https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/foundations.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>