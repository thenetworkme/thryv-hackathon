import React, { useState } from 'react';
import { Command, Paperclip, Send, Sun, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Footer from './Footer';

export default function Chatbot() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a]  text-white">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8">¿Qué quieres saber?</h1>
        <div className="w-full max-w-2xl space-y-6">
          <div className="relative w-full max-w-2xl">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Preguntar algo..."
              className="pr-32 h-12 w-full bg-transparent focus:ring-[#00A3FF] focus:border-[#00A3FF]"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip size={18} className="text-muted-foreground" />
              </Button>

              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Send size={18} className="text-muted-foreground" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Card className="bg-gray-800/50 hover:bg-gray-700 transition-colors">
              <CardContent className="p-4 flex items-center gap-2">
                <Command size={18} />
                <span>Enfoque</span>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 hover:bg-gray-700 transition-colors">
              <CardContent className="p-4 flex items-center gap-2">
                <Sun size={18} />
                <span>23°C</span>
                <span className="text-sm text-gray-400">
                  Parcialmente nublado
                </span>
              </CardContent>
            </Card>

            <Card className="ml-auto bg-gray-800/50 hover:bg-gray-700 transition-colors">
              <CardContent className="p-4 flex items-center gap-2">
                <span>Pro</span>
                <MoreHorizontal size={18} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
