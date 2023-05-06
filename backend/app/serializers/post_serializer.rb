class PostSerializer < BaseSerializer
  def as_json(*)
    if object.is_a?(Gink)
      GinkSerializer.new(object).as_json
    elsif object.is_a?(Review)
      ReviewOfBookSerializer.new(object).as_json
    else
      super
    end
  end
end
