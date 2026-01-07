import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

// 1. Accept 'incidents' as a prop
export function IncidentsList({ incidents = [] }) {
  
  // 2. Handle empty state
  if (!incidents || incidents.length === 0) {
    return (
      <div className="text-center py-10 border rounded-md bg-gray-50">
        <p className="text-muted-foreground">No incidents reported yet.</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Reported Date</TableHead>
            {/* Note: 'lastUpdated' might not be in your specific DB schema, 
                so you can optionally hide this column or rely on 'updatedAt' if Mongoose adds it */}
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow key={incident._id}> 
              {/* Note: MongoDB uses '_id', not 'id' */}
              <TableCell className="font-medium">{incident.title}</TableCell>
              
              {/* Fallback for status if undefined */}
              <TableCell>{incident.status || "Open"}</TableCell>
              
              <TableCell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  incident.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : incident.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}>
                  {incident.priority || "Low"}
                </span>
              </TableCell>

              {/* Use 'createdAt' if 'reportedDate' doesn't exist in your schema */}
              <TableCell>
                {new Date(incident.createdAt || incident.reportedDate || Date.now()).toLocaleDateString()}
              </TableCell>
              
              <TableCell className="max-w-xs truncate text-muted-foreground">
                {incident.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}