![aws-shared-responsability-model](https://d1.awsstatic.com/security-center/Shared_Responsibility_Model_V2.59d1eccec334b366627e9295b304202faf7b899b.jpg)

> Security and Compliance is a **shared responsability** between AWS and the customer. Customers should carefully consider the services they choose as their responsabilities vary depending on the services used, the integration of those services into their IT environments, and applicable laws and regulations.

## **AWS Reponsability "Security *of* the Cloud"**
AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, and facilities that run AWS Cloud services.

## **Customer Responsability "Security *in* the Cloud"**
***Customer responsability will be determined by the AWS Cloud services that a customer selects.*** This determines the amount of configuration work the customer must perform as part of their security responsabilities. Customers are responsible for managing their data (including encryption options), classifying their assets, and using IAM tools to apply the appropriate permissions.

<details>
<summary>Inherited Controls</summary>
<p>
Controls which a customer fully inherits from AWS. Example:
</p>
<p>
<ul>
    <li>Physical and Environmental controls</li>
</ul>
</p>
</details>

<details>
<summary>Shared Controls</summary>
<p>
Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives. In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services. Examples include:
</p>
<p>
<ul>
    <li>Patch Management – AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.</li>
    <li>Configuration Management – AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.</li>
    <li>Awareness & Training - AWS trains AWS employees, but a customer must train their own employees.</li>
</ul>
</p>
</details>
<details>
<summary>Customer Specific</summary>
<p>
Controls which are solely the responsibility of the customer based on the application they are deploying within AWS services. Examples include:
</p>
<p>
<ul>
    <li>Service and Communications Protection or Zone Security which may require a customer to route or zone data within specific security environments.</li>
</ul>
</p>
</details>
