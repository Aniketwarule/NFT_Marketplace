
import React from 'react';
import { Card } from "@/components/ui/card";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = "javascript" }: CodeBlockProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-secondary border-b border-border/50">
        <span className="text-xs font-mono text-muted-foreground">{language}</span>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-destructive/70"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500/70"></div>
          <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
        </div>
      </div>
      <div className="bg-background/80 overflow-auto max-h-[400px] p-4">
        <pre className="font-mono text-sm text-foreground">
          <code>{code}</code>
        </pre>
      </div>
    </Card>
  );
};
