<script lang="ts">
    import Ellipsis from "lucide-svelte/icons/ellipsis";
    import { Trash2 } from 'lucide-svelte';
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Button } from "$lib/components/ui/button";
    
   
    export let id: string;
  </script>
   
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button
        variant="ghost"
        builders={[builder]}
        size="icon"
        class="relative h-8 w-8 p-0"
      >
        <span class="sr-only">Open menu</span>
        <Ellipsis class="h-4 w-4" />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
       
        <!-- <DropdownMenu.Item on:click={() => navigator.clipboard.writeText(id)}>
          Copy payment ID
        </DropdownMenu.Item> -->
      </DropdownMenu.Group>
      

      <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
      <DropdownMenu.Item>Move</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item><Trash2 class="w-4 h-4 mr-2" />Delete</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>