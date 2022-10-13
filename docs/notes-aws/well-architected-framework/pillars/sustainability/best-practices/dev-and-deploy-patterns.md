The following question focuses on these considerations for sustainability.

??? question "How do your development and deployment processes support your sustainability goals?"

    Look for opportunities to reduce your sustainability impact by making changes to your development, test, and deployment practices.

## Adopt methods that can rapidly introduce sustainability improvements
Test and validate potential improvements before deploying them to production. Account for the cost of testing when calculating potential future benefit of an improvement. Develop low-cost testing methods to enable delivery of small improvements.

## Keep your workload up to date
Up-to-date operating systems, libraries, and applications can improve workload efficiency and enable easier adoption of more efficient technologies. Up-to-date software might also include features to measure the sustainability impact of your workload more accurately, as vendors deliver features to meet their own sustainability goals.

## Increase utilization of build environments
Use automation and infrastructure as code to bring pre-production environments up when needed and take them down when not used. A common pattern is to schedule periods of availability that coincide with the working hours of your development team members. Hibernation is a useful tool to preserve state and rapidly bring instances online only when needed. Use instance types with burst capacity, spot instances, elastic database services, containers, and other technologies to align development and test capacity with use.

## Use managed device farms for testing
Managed device farms spread the sustainability impact of hardware manufacturing and resource usage across multiple tenants. Managed device farms offer diverse device types so you can support older, less popular hardware, and avoid customer sustainability impact from unnecessary device upgrades.

<a href="https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/development-and-deployment-process.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>