The following question focuses on these considerations for performance efficiency.

??? question "How do you select your storage solution?"

    The optimal storage solution for a system varies based on the kind of access method (block, file, or object), patterns of access (random or sequential), required throughput, frequency of access (online, offline, archival), frequency of update (WORM, dynamic), and availability and durability constraints. Well-architected systems use multiple storage solutions and enable different features to improve performance and use resources efficiently.

The optimal storage solution for a particular system varies based on the kind of access method (block, file, or object), patterns of access (random or sequential), throughput required, frequency of access (online, offline, archival), frequency of update (WORM, dynamic), and availability and durability constraints. Well-architected systems use multiple storage solutions and enable different features to improve performance.

Performance can be measured by looking at throughput, input/output operations per second (IOPS), and latency. Understanding the relationship between those measurements will help you select the most appropriate storage solution.

|   Storage   |            Services            |      Latency       | Throughput |                   Shareable                   |
| :---------: | :----------------------------: | :----------------: | :--------: | :-------------------------------------------: |
|    Block    | Amazon EBS, EC2 Instance Store | Lowest, consistent |   Single   | Mounted on Ec2 instance, copies via snapshots |
| File system |     Amazon EFS, Amazon FSx     |  Low, consistent   |  Multiple  |                 Many Clients                  |
|   Object    |           Amazon S3            |    Low-latency     | Web scale  |                 Many Clients                  |
|  Archival   |       Amazon S3 Glacier        |  Minutes to hours  |    High    |                      No                       |

<a href="https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/storage-architecture-selection.html">![aws-logo](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>