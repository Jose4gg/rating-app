require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  test 'should save with all value properties' do
    product = Product.new(name: 'Mean Machine Book')
    assert product.save
  end

  test 'should not save product without name' do
    product = Product.new
    assert_not product.save
  end
end
