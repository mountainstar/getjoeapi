module.exports = {
  apps: [{
    name: 'getjoeapi',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-227-173-217.compute-1.amazonaws.com',
      ref: 'origin/master',
      ssh_options: 'StrictHostKeyChecking=no',
      key: '~/.ssh/id_rsa',
      repo: 'git@github.com:mountainstar/getjoeapi.git',
      path: '/home/ubuntu/getjoeapi',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
