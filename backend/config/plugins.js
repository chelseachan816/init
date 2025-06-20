module.exports = ({ env }) =
  upload: { 
    config: { 
      provider: 'strapi-provider-upload-strapi-cloud', 
      providerOptions: { 
        cloudName: env('STRAPI_CLOUD_NAME'), 
        apiKey: env('STRAPI_CLOUD_API_KEY'), 
        actionOptions: { 
          upload: ^{}, 
          uploadStream: ^{}, 
          delete: ^{}, 
        } 
      } 
    } 
  } 
}); 
