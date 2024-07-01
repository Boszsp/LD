/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	return {
		keyword: url.searchParams.get('search')
	};
}

/** @type {import('./$types').Actions} */ export const actions = {
	default: async (event) => {
		// TODO log the user in
		console.log(event);
	}
};
