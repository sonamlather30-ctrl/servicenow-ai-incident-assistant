# AI Incident Assistant (ServiceNow + Generative AI)

## 🚀 Overview
This project demonstrates how Generative AI can be integrated with ServiceNow to automate incident summarization and resolution suggestions.

## 🎯 Use Case
Service Desk agents often spend time analyzing long incident descriptions.  
This system reduces effort by generating quick summaries and recommended solutions using AI.

## ⚙️ Features
- Incident summarization
- Automated resolution suggestion
- REST API integration
- Error handling for invalid input and API failures

## 🧠 Architecture
ServiceNow → REST API → AI Model → Response → Update Incident

## 🔄 Workflow
1. Incident is created in ServiceNow
2. Description is sent to AI API
3. AI processes and generates summary + solution
4. Output can be stored in a custom field (u_ai_summary)

## 🔗 ServiceNow Integration (Concept)
- Business Rule triggers API call on incident creation
- REST Message used for API communication
- Response stored in ServiceNow field

## 💻 Tech Stack
- JavaScript (Node.js)
- REST API
- ServiceNow (Conceptual Integration)

## 📥 Example Input
User unable to login to VPN, authentication failed.

## 📤 Example Output
Summary: VPN login issue due to authentication failure.  
Resolution: Reset credentials and verify VPN configuration.

## ⚠️ Error Handling
- Handles empty input
- Handles API failure scenarios

## 📌 Future Enhancements
- Ticket classification (category & priority)
- UI integration
- ServiceNow direct implementation
