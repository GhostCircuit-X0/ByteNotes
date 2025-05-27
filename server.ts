// server.ts
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { handler } from "./dist/server/index.js";

serve(handler);
