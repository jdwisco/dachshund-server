# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  # Debugger
  config.vm.network "forwarded_port", guest: 3000, host: 2006
  config.vm.network "forwarded_port", guest: 5858, host: 2007

  # Server
  config.vm.network "forwarded_port", guest: 8000, host: 2008

  config.vm.network "public_network"
  config.ssh.forward_agent = true
  config.vm.synced_folder "./", "/var/www/dachshund-server"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provision/vagrant.yml"
  end

  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    v.customize ["modifyvm", :id, "--nictype1", "virtio"]
    v.memory = 1024
    v.cpus = 2
  end
end
