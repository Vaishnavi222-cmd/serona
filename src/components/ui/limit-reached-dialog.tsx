
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, AlertCircle } from "lucide-react";

interface LimitReachedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  timeRemaining: string;
  onUpgrade: () => void;
}

export function LimitReachedDialog({
  open,
  onOpenChange,
  timeRemaining,
  onUpgrade,
}: LimitReachedDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800">
        <div className="flex flex-col items-center justify-center p-4 space-y-4">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-orange-500" />
          </div>
          
          <h2 className="text-lg font-semibold text-center">Free Plan Limit Reached</h2>
          
          <p className="text-sm text-gray-300 text-center">
            You've reached your free plan message limit. Wait for your limit to reset or upgrade to continue.
          </p>

          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">Resets in {timeRemaining}</span>
          </div>

          <div className="flex gap-3 w-full pt-2">
            <Button
              variant="outline"
              className="flex-1 bg-transparent text-white border-gray-700 hover:bg-gray-800"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-[#1EAEDB] to-[#1EA7DB] hover:from-[#1E9EDB] hover:to-[#1E9EDB] text-white border-0"
              onClick={onUpgrade}
            >
              Upgrade Plan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
