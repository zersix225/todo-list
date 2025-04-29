import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function DialogCloseButton({ onSave, id }) {
    const [newData, setNewData] = useState({
        id: id,
        name: ''
    })
    const handleClick = () => {
        onSave(newData); 
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                </DialogHeader>
                <DialogDescription>Update your todo item below.</DialogDescription>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input
                            name="name"
                            placeholder="Enter new todo name" 
                            onChange={(e) => setNewData({...newData, [e.target.name]: e.target.value})}
                            value={newData.name}
                        />
                    </div>
                    <DialogClose asChild>
                        <Button type="submit" onClick={handleClick}>Save</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}

