const fs = require('fs');
const execSync = require('child_process').execSync;
const ghPages = require('gh-pages');

const pkg = JSON.parse(fs.readFileSync('./package.json'));

// first update 'demos' directory
execSync('grunt clean:demos && grunt copy:demos', { stdio: [0, 1, 2] });

ghPages.publish(
	'demos',
	{
		add: true,
		dotfiles: false,
		history: false,
		message: 'OOUI demo pages update: ' + pkg.version
	}
);
