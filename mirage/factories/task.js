	import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	title: faker.hacker.phrase,
    status: faker.lorem.sentence

    // 'first-name'() { return faker.name.firstName(); },
  // 'last-name'() { return faker.name.lastName(); }
});
