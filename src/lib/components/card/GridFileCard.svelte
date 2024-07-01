<script>
    export let color,title,href,cardClass
    import { FileSolid } from 'flowbite-svelte-icons';
    import { Card } from 'flowbite-svelte';

</script>
<Card shadow={false} class={"bg-primary-900 hover:bg-primary-800 transition !p-3 "+cardClass} href={href}>
    <div class="flex gap-2 mb-3"><FileSolid class="w-5 h-5" color={color}/> {title}</div>
    <div class="bg-white aspect-[4/3] rounded">

    </div>
</Card>
