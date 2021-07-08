import ProgTable from './ProgTable.svelte';

const progtable = new ProgTable({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default progtable;