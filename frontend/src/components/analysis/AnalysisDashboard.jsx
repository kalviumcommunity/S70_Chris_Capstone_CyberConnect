import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AnalysisDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Threat Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#717d8a]">
            AI-powered analysis of emerging threat patterns and trends.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#717d8a]">
            Automated risk scoring and vulnerability assessment.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Predictive Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#717d8a]">
            Future threat predictions based on current data.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}