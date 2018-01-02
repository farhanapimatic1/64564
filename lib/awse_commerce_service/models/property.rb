# This file was automatically generated by APIMATIC v2.0
# ( https://apimatic.io ).

module AwseCommerceService
  # Property Model.
  class Property < BaseModel
    # TODO: Write general description for this method
    # @return [String]
    attr_accessor :name

    # TODO: Write general description for this method
    # @return [String]
    attr_accessor :value

    # A mapping from model property names to API property names.
    def self.names
      @_hash = {} if @_hash.nil?
      @_hash['name'] = 'Name'
      @_hash['value'] = 'Value'
      @_hash
    end

    def initialize(name = nil,
                   value = nil)
      @name = name
      @value = value
    end

    # Creates an instance of the object from a hash.
    def self.from_hash(hash)
      return nil unless hash

      # Extract variables from the hash.
      name = hash['Name']
      value = hash['Value']

      # Create object from extracted values.
      Property.new(name,
                   value)
    end
  end
end
