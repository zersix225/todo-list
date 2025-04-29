import React, {  useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const TodoList = ({ title, children, isSuccess, id, initialSuccess }) => {
  const [success, setSuccess] = useState({
    id: id,
    success: initialSuccess,
  });
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <Card className="w-full">
        <CardContent className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Checkbox
              checked={success.success}
              onCheckedChange={() => {
                const newSuccess = !success.success;
                setSuccess({ ...success, success: newSuccess });
                isSuccess({ id: success.id, success: newSuccess });
                setShowAlert(true)
              }}
            />
            <CardTitle>{title}</CardTitle>
          </div>

          <div className="space-x-1">{children}</div>
        </CardContent>
      </Card>

      {showAlert && (
        <Alert
          className={`mt-2 border ${success.success
            ? "mt-2 border-green-500 border-2 text-green-500"
            : "mt-2 border-red-500 border-2 text-red-500"
            }`}
        >
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>
            Status has been changed to {success.success ? "finished" : "unfinished"}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default TodoList;
