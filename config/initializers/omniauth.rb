OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '472487267923-j76eh5l3hbn5hkava6cs6jcgo35rnsk0.apps.googleusercontent.com', 'hbiLvjbpt15Da8e8nUvj5ArS', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
