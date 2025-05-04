import { Card, CardContent } from "../ui/card";
import { Bell, Shield, AlertTriangle } from "lucide-react";

export function NotificationsList() {
  const notifications = [
    {
      id: 1,
      title: "Critical Security Update",
      message: "New security patch available for your system",
      type: "critical",
      timestamp: "2024-04-24T10:00:00"
    },
    {
      id: 2,
      title: "Threat Alert",
      message: "Suspicious activity detected in your network",
      type: "warning",
      timestamp: "2024-04-24T09:30:00"
    }
  ];

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Card key={notification.id}>
          <CardContent className="flex items-center gap-4 p-4">
            {notification.type === "critical" ? (
              <AlertTriangle className="h-5 w-5 text-[#dc2626]" />
            ) : (
              <Bell className="h-5 w-5 text-[#f59e0b]" />
            )}
            <div className="flex-1">
              <h3 className="font-medium">{notification.title}</h3>
              <p className="text-sm text-[#717d8a]">
                {notification.message}
              </p>
              <p className="text-xs text-[#717d8a] mt-1">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}