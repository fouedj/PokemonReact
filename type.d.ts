// types.d.ts

// Importez l'interface JSX.IntrinsicElements de TypeScript
import 'react';

// Déclarez une interface JSX.IntrinsicElements personnalisée
declare module 'react' {
  interface IntrinsicElements {
    // Déclarez ici les noms des éléments JSX intrinsèques que vous utilisez dans votre application
    // Exemple :
    // div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    // span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    // input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    // etc.
  }
}
