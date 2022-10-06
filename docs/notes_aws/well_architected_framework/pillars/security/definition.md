The Security pillar encompasses the ability to protect data, systems, and assets to take advantage of cloud technologies to improve your security.

## **Definition**
There are six best practice areas for security in the cloud:

- Security
- Identity and Access Management
- Detection
- Infrastructure Protection
- Data Protection
- Incident Response

Before you architect any workload, you need to put in place practices that influence security. ***You will want to control who can do what***. In addition you want to be able to identify security incidents, protect your systems and services, and maintain the confidentiality and integrity of data through data protection. You should have a well-defined and practiced process for responding to security incidents.

The AWS Shared Reponsability Model enables organizations that adopt the cloud to acheive their security and compliance goals. Because AWS physically secures the infrastructure that supports our cloud services, as an ***AWS customer you can focus on using services to accomplish your goals. The AWS Cloud also provides greater access to security data and an automated approach to responding to security events.***

## **Desing principles**
There are 7 design principles for security in the cloud:
<details>
<summary>Implement a strong identity foundation</summary>
<p>
Clients must only have permissions to do what they are required to do, nothing more. Principle of least privilege. Centralize identity management, and aim to eliminate reliance on long-term static credentials.
</p>
</details>
<details>
<summary>Enable traceability</summary>
<p>
Monitor, alert, and audit actions and changes to your environment in real time. Integrate log and metric collection with systems to automatically investigate and take action.
</p>
</details>
<details>
<summary>Apply security at all layers</summary>
<p>
Apply a defense in depth approach with multiple security controls. Apply to all layers (for example, edge of network, VPC, load balancing, every instance and compute service, operating system, application, and code).
</p>
</details>
<details>
<summary>Automate security best practices</summary>
<p>
Automated software-based security mechanisms improve your ability to securely scale more rapidly and cost-effectively. Create secure architectures, including the implementation of controls that are defined and managed as code in version-controlled templates.
</p>
</details>
<details>
<summary>Protect data in transit and at rest</summary>
<p>
Classify your data into sensitivity levels and use mechanisms, such as encryption, tokenization, and access control where appropriate.
</p>
</details>
<details>
<summary>Keep people away from data</summary>
<p>
Use mechanisms and tools to reduce or eliminate the need for direct access or manual processing of data. This reduces the risk of mishandling or modification and human error when handling sensitive data.
</p>
</details>
<details>
<summary>Prepare for security events</summary>
<p>
Prepare for an incident by having incident management and investigation policy and processes that align to your organizational requirements. Run incident response simulations and use tools with automation to increase your speed for detection, investigation, and recovery.
</p>
</details>