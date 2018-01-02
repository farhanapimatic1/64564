# This file was automatically generated by APIMATIC v2.0
# ( https://apimatic.io ).

module AwseCommerceService
  # Merchant Model.
  class Merchant < BaseModel
    # TODO: Write general description for this method
    # @return [String]
    attr_accessor :name

    # A mapping from model property names to API property names.
    def self.names
      @_hash = {} if @_hash.nil?
      @_hash['name'] = 'Name'
      @_hash
    end

    def initialize(name = nil)
      @name = name
    end

    # Creates an instance of the object from a hash.
    def self.from_hash(hash)
      return nil unless hash

      # Extract variables from the hash.
      name = hash['Name']

      # Create object from extracted values.
      Merchant.new(name)
    end
  end
end
