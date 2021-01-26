const execSync = require('child_process').execSync;
const ghpages = require('gh-pages');

// first update 'demos' directory
execSync('grunt clean:demos && grunt copy:demos', { stdio: [0, 1, 2] });

ghpages.publish(
	'demos',
	{
		add: true,
		dotfiles: false,
		// for testing purposes
		push: false,
		async beforeAdd(git) {
			return git.rm([
				'./php',
				'./vendor',
				'./*.php',
				'./composer.json',
				'./composer.lock',
				'./infusion.js'
			]);
		}
	}
);
