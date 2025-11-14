# AWS Auto Scaling Setup Guide for Web Applications

This guide explains how to **auto-scale a Node.js (or any Dockerized) application on AWS** using **Auto Scaling Groups (ASGs)**, **Launch Templates**, **Target Groups**, and **Elastic Load Balancers (ELB)**.

---

## 🚀 Objective

Enable your application hosted on AWS to **automatically scale out (add more instances)** when traffic increases and **scale in (remove instances)** when demand decreases.

---

## 📌 Prerequisites

- AWS account with necessary IAM permissions
- Your application code ready in a Git repository
- EC2 Key Pair for SSH
- Basic understanding of Linux terminal, Docker, Node.js
- Domain (optional) and SSL certificate (optional, for HTTPS)

---

## 📍 Step 1: Create & Configure Your EC2 Instance

1. **Launch an EC2 instance**
   - Choose Amazon Linux 2 / Ubuntu
   - t2.micro or higher instance type
   - Configure security group (Allow SSH, HTTP, HTTPS)
   - Assign IAM role with EC2 and CloudWatch permissions

2. **Connect to EC2 using SSH**
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-public-ip
   ```

3. **Install your application dependencies**
   ```bash
   sudo yum update -y       # or sudo apt update -y for Ubuntu
   sudo yum install docker -y
   sudo service docker start
   sudo usermod -aG docker ec2-user
   sudo curl -fsSL https://bun.sh/install | bash  # or install Node.js
   ```

4. **Clone your project and configure**
   ```bash
   git clone https://github.com/your-org/your-repo.git
   cd your-repo
   ```

5. **Test that your app runs correctly**

---

## 📍 Step 2: Create an Amazon Machine Image (AMI)

- Go to **EC2 > Instances**
- Select your configured EC2
- Click **Actions > Image and Templates > Create Image**
- Add a name & optional description
- Click **Create Image**

---

## 📍 Step 3: Create a Launch Template

1. Go to **EC2 > Launch Templates**
2. Click **Create Launch Template**
3. Fill out:
   - Name, Description
   - Choose **AMI** created in Step 2
   - Select instance type
   - Key Pair
   - Network settings
4. **Advanced: Add a user-data script**
   ```bash
   #!/bin/bash
   cd /home/ec2-user/your-repo
   git pull origin main
   docker compose up -d

   <!-- or -->

   #!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.0.0/bin/
echo "hi there before"
echo "hi there after"
npm install -g pm2
cd /home/ubuntu/week-22
pm2 start index.js
pm2 save
pm2 startup
   ```

5. Click **Create Launch Template**

---

## 📍 Step 4: Create a Target Group

1. Go to **EC2 > Load Balancing > Target Groups**
2. Click **Create target group**
   - Type: **Instance**
   - Protocol: **HTTP**
   - Port: **80**
   - VPC: Same as your instance
3. Register EC2 instance (optional)
4. Click **Create**

---

## 📍 Step 5: Create an Application Load Balancer (ALB)

1. Go to **Load Balancers**
2. Click **Create Load Balancer > Application Load Balancer**
3. Set:
   - Name, Scheme
   - Listeners: HTTP (80) or HTTPS (443)
   - Availability Zones
   - Target Group

---

## 📍 Step 6: Create Auto Scaling Group (ASG)

1. Go to **EC2 > Auto Scaling Groups**
2. Click **Create Auto Scaling Group**
3. Choose:
   - Name
   - Launch Template
4. Configure:
   - VPC and Subnets
   - Attach Load Balancer

---

## 📍 Step 7: Set Auto Scaling Policies

1. In ASG settings:
2. Go to **Automatic Scaling > Add Policy**
3. Choose **Target Tracking Scaling Policy**
4. Example:
   - CPU ≥ 60% → Add 1 instance
   - CPU < 30% → Remove 1 instance

---

## ✅ Verification Checklist

- [ ] App runs on EC2 with Docker
- [ ] AMI created successfully
- [ ] Launch Template configured
- [ ] Target Group & Load Balancer setup
- [ ] ASG created and linked
- [ ] Scaling Policy tested

---

## 🧹 Cleanup Steps

- Delete **Auto Scaling Group**
- Delete **Load Balancer**
- Delete **Target Group**
- Delete **Launch Template**
- Delete **AMI**
- Terminate **EC2 instance**

---

## 📌 Additional Notes

- Use **CloudWatch** for custom metrics
- Avoid Elastic IPs with ASGs
- Use **SSM** for EC2 access
- Use **EFS** or **S3** for shared storage
- Use **Secrets Manager** for secure secrets

---

## 📎 AWS Services Summary

| Service            | Purpose               |
|--------------------|------------------------|
| EC2                | Compute Instance      |
| AMI                | Instance Snapshot     |
| Launch Template    | Boot Config           |
| ALB (ELB)          | Load Balancer         |
| ASG                | Auto Scale            |
| CloudWatch         | Metrics & Logs        |
| IAM                | Permissions           |
| Secrets Manager    | Secrets Storage       |
| EFS / S3           | Persistent Storage    |

---

**Generated on:** 2025-07-11 06:18:12
