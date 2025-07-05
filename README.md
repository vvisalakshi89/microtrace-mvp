# Microtrace MVP

🚀 **Microtrace** is a developer-first microservices tracing dashboard built on top of OpenTelemetry and Jaeger. This MVP helps developers visualize, debug, and understand request flows across distributed services — all from a clean, focused UI.

---

## 🌐 Project Overview

This project demonstrates:

- Distributed tracing using the **OpenTelemetry Java agent**
- Service-to-service calls between two Spring Boot microservices: `service-a` and `service-b`
- Traces exported to **Jaeger** via OTLP (gRPC)
- Jaeger UI for trace visualization
- Future support for a custom Angular dashboard (Microtrace UI)

---

## 📁 Project Structure

microtrace-mvp/
├── backend/
│ ├── service-a/ # Spring Boot microservice A
│ └── service-b/ # Spring Boot microservice B
├── docker-compose.yml # Sets up Jaeger, Prometheus, Grafana, etc.
├── otel/
│ ├── opentelemetry-javaagent.jar
│ └── otel-config.properties # Common OpenTelemetry config for all services
├── microtrace-backend/ # (Upcoming) Node.js backend for Microtrace UI
└── microtrace-ui/ # (Upcoming) Angular frontend for Microtrace UI
---

## ⚙️ How It Works

1. Java agent (`opentelemetry-javaagent.jar`) is attached to each service.
2. Services export trace data to Jaeger via OTLP gRPC (`http://localhost:4317`)
3. Jaeger UI displays full trace hierarchy
4. (Coming soon) Microtrace UI will add custom dashboards and trace comparison features

---

## 🧪 Running the Project

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/microtrace-mvp.git
cd microtrace-mvp

**2. Start infrastructure (Jaeger, Grafana, Prometheus)**
bash
Copy
Edit
docker-compose up -d
**3. Run service-a and service-b with Java agent**
Use this sample JVM argument when starting each Spring Boot app:

bash
Copy
Edit
-javaagent:/path/to/opentelemetry-javaagent.jar \
-Dotel.javaagent.configuration-file=/path/to/otel-config.properties \
-Dotel.service.name=service-a
Update otel.service.name for each service as needed (service-a, service-b, etc.)

**📈 Tracing UI**
Once services are running and calls are made:

Access Jaeger UI at: http://localhost:16686

Search for traces by service name (e.g., service-a)
