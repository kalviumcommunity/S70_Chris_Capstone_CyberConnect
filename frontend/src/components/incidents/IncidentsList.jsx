import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../ui/table";
  
  export function IncidentsList() {
    // This would typically fetch from your API
    const incidents = [
      {
        id: 1,
        title: "Data Breach Attempt",
        status: "Investigating",
        priority: "High",
        reportedDate: "2024-04-24",
        lastUpdated: "2024-04-24"
      },
      {
        id: 2,
        title: "Suspicious Network Activity",
        status: "Resolved",
        priority: "Medium",
        reportedDate: "2024-04-23",
        lastUpdated: "2024-04-24"
      }
    ];
  
    return (
      <div className="rounded-md ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Reported Date</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incidents.map((incident) => (
              <TableRow key={incident.id}>
                <TableCell className="font-medium">{incident.title}</TableCell>
                <TableCell>{incident.status}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    incident.priority === "High"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {incident.priority}
                  </span>
                </TableCell>
                <TableCell>{new Date(incident.reportedDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(incident.lastUpdated).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }