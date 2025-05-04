import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Shield, AlertTriangle } from "lucide-react";

export function ThreatList() {
  // This would typically fetch from your API
  const threats = [
    {
      id: 1,
      title: "Ransomware Attack Alert",
      severity: "High",
      description: "New strain of ransomware targeting healthcare institutions",
      date: "2024-04-24"
    },
    {
      id: 2,
      title: "Phishing Campaign Detected",
      severity: "Medium",
      description: "Widespread phishing emails impersonating financial institutions",
      date: "2024-04-23"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {threats.map((threat) => (
        <Card key={threat.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            {threat.severity === "High" ? (
              <AlertTriangle className="h-8 w-8 text-[#dc2626]" />
            ) : (
              <Shield className="h-8 w-8 text-[#f59e0b]" />
            )}
            <div>
              <CardTitle className="text-lg">{threat.title}</CardTitle>
              <p className={`text-sm ${
                threat.severity === "High" ? "text-[#dc2626]" : "text-[#f59e0b]"
              }`}>
                {threat.severity} Severity
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-[#717d8a]">{threat.description}</p>
            <p className="text-sm text-[#717d8a] mt-4">
              Reported: {new Date(threat.date).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}