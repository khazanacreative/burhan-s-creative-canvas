import { LogIn, LogOut, Edit, X } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

const FloatingLoginButton = () => {
  const { isAuthenticated, isEditMode, login, logout, toggleEditMode } = useAuth();
  const [showDialog, setShowDialog] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleLogin = () => {
    if (login(password)) {
      toast({
        title: "Login successful",
        description: "You are now authenticated",
      });
      setShowDialog(false);
      setPassword('');
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
        {isAuthenticated && (
          <>
            <Button
              size="icon"
              variant={isEditMode ? "default" : "secondary"}
              className="rounded-full h-12 w-12 shadow-lg"
              onClick={toggleEditMode}
            >
              {isEditMode ? <X className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
            </Button>
            <Button
              size="icon"
              variant="destructive"
              className="rounded-full h-12 w-12 shadow-lg"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </>
        )}
        {!isAuthenticated && (
          <Button
            size="icon"
            variant="default"
            className="rounded-full h-14 w-14 shadow-lg"
            onClick={() => setShowDialog(true)}
          >
            <LogIn className="h-6 w-6" />
          </Button>
        )}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Login</DialogTitle>
            <DialogDescription>
              Enter your password to access edit mode
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Enter password"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingLoginButton;
