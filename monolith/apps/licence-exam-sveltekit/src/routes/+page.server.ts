import prismaClient from 'db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		users: await prismaClient.user.findMany({
			include: {
				items: true,
			},
		}),
	};
}) satisfies PageServerLoad;
