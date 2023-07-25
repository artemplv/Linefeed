json.errors do
  json.array! @errors.full_messages
end

json.error_fields do
  @errors.to_hash.each do |key, value|
    json.set! key, value&.first
  end
end  
