import SendEmail from "../typings/sendEmail";

const baseUrl = "https://nodejs-production-6fa0.up.railway.app";

const customClients = {
  sendEmail: (body: SendEmail) => {
    return fetch(`${baseUrl}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
};

export default customClients;
